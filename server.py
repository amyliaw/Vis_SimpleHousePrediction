
# coding: utf-8

# In[1]:

import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
from collections import Counter
from sklearn import preprocessing
from sklearn.model_selection import train_test_split

from flask import Flask,jsonify
import json
from flask_cors import CORS
from scipy.spatial import distance

app = Flask(__name__)

data = pd.read_csv("./data/kc_house_data.csv")


date = data['date'] # Only consider year of sale date
for i in range(len(date)):
    year = date[i][0:4]
    data.iloc[i,1] = year
yr_renovated = data['yr_renovated'] # If there is a renovation, consider it as time of built
for i in range(len(yr_renovated)):
    if(yr_renovated[i] != 0):
        data.loc[i,'yr_built'] = yr_renovated[i]
data = data.dropna() # Drop all observations containing na
dummy_data = pd.get_dummies(data, columns = ['date','bedrooms','waterfront','view','condition','grade','zipcode']) # Dummy data
price = dummy_data['price'] # Price is target
newdata = dummy_data.drop(['id','yr_renovated','lat','long','price'],axis = 1) # id lat long is not relevant to our model



min_max_scaler = preprocessing.MinMaxScaler()
d = min_max_scaler.fit_transform(newdata) #Normalized data matrix

X_train, X_test, y_train, y_test = train_test_split(d, price, test_size=0.2, random_state=42)




def KNN(data, sqft, zipcode, year, bedroom, bathroom): #input sqft, zipcode, year, bedroom, bathroom to do prediction
    ob = pd.DataFrame(np.matrix([sqft, year, bedroom, bathroom]), columns=['sqft_living','yr_built','bedrooms','bathrooms'])
    df_zipcode = data[['sqft_living','zipcode','yr_built','bedrooms','bathrooms']] #filter by zipcode
    df_zipcode = df_zipcode[df_zipcode['zipcode'] == zipcode][['sqft_living','yr_built','bedrooms','bathrooms']]
    df_zipcode = df_zipcode.append(ob)
    df_norm = min_max_scaler.fit_transform(df_zipcode)
    dist = []
    observation = df_norm[len(df_norm)-1,:]
    for i in range(len(df_norm)-1):
        dist.append(distance.euclidean(df_norm[i,:],observation)) #find the observations with smallest distance
    index = np.argsort(dist)[:10]
    df_10 = df_zipcode.iloc[index,:]
    return df_10 #return index of dataframe



def predict(clf,data,newdata,sqft,zipcode, year, bedroom, bathroom): #data:original data #newdata:dummydata
    temp = KNN(data, sqft, zipcode, year, bedroom, bathroom)
    index = temp.index
    df = newdata[newdata.index.isin(index)]
    min_max_scaler.fit(newdata) #normalize 
    df_norm = min_max_scaler.transform(df)
    top_prediction = clf.predict(df_norm) #do predition
    return np.median(top_prediction) 



from sklearn import linear_model
clf = linear_model.Lasso(alpha=0.1) 
clf.fit(X_train,y_train)


# In[13]:


width = max(list(data['price'])) - min(list(data['price']))
length = 300
seg = 5000
price = []
num = []
a = 75000
b = a + seg
for i in range(length):
    num.append(len(data[data['price'].between(a,b-1)]))
    price.append(a)
    a = a + seg
    b = b + seg


# In[14]:


width = max(list(data['sqft_living'])) - min(list(data['sqft_living']))
length = 300
seg = 20
sqft_l = []
numm = []
a = 290
b = a + seg
for i in range(length):
    numm.append(len(data[data['sqft_living'].between(a,b-1)]))
    sqft_l.append(a)
    a = a + seg
    b = b + seg


def sqft_range_sample(data,a,b):
    data_fil = data[(data['sqft_living'] > a) & (data['sqft_living'] < b)]
    return data_fil


def price_range_sample(data,a,b):
    data_fil = data[(data['price'] > a) & (data['price'] < b)]
    return data_fil




CORS(app)
@app.route('/project/status=<status>&sqft=<sqft>&zipcode=<zipcode>&year=<year>&bedroom=<bedroom>&bathroom=<bathroom>&mi=<mi>&ma=<ma>&mis=<mis>&mas=<mas>', methods=['GET'])
def server(status,sqft,zipcode,year,bedroom,bathroom,mi,ma,mis,mas): 
    status = int(status)
    sqft = float(sqft)
    zipcode = int(zipcode)
    year = int(year)
    bedroom = float(bedroom)
    bathroom = float(bathroom)
    mi = float(mi)
    ma = float(ma)
    mis = float(mis)
    mas = float(mas)
    if(status == 1): # st = 1 means we want to do a prediction
        price_pred = predict(clf,data,newdata,sqft,zipcode,year,bedroom,bathroom)
        return json.dumps(price_pred)
    if(status == 2): # return sample data
        dict_2 = []
        d = data.sample(100)
        d = d[['sqft_living','zipcode','yr_built','bedrooms','bathrooms','lat','long','price']]
        return d.to_json(orient='split')
    if(status == 3): #return data zipcode vs average price
        zipcode = list(Counter(data.iloc[:,16]).keys())
        count = list(Counter(data.iloc[:,16]).values())
        a_list = []
        for i in range(len(zipcode)):
            temp = data[data['zipcode'] == zipcode[i]]
            s = np.sum(temp['price'])
            average = s / count[i]
            a_list.append({'zipcode':float(zipcode[i]),'average':average})
        return json.dumps(a_list)
    if(status == 4): #return observations with price between mi and ma, with sqft between mis and mas
        d = price_range_sample(data,mi,ma)
        d = sqft_range_sample(d,mis,mas)
        d = d[['sqft_living','zipcode','yr_built','bedrooms','bathrooms','lat','long','price']]
        if(len(d) > 50):
            d = d.sample(50)
        return d.to_json(orient='split')
    if(status == 5): #return most similar
        index = KNN(data, sqft,zipcode,year,bedroom,bathroom).index
        df = data[data.index.isin(index)]
        d = df[['sqft_living','zipcode','yr_built','bedrooms','bathrooms','lat','long','sqft_basement','condition','floors','price']]
        return d.to_json(orient='split')


# In[ ]:


if __name__ == '__main__':
    app.run(debug=True)


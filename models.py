from tortoise.models import Model
from tortoise import fields
from tortoise.contrib.pydantic import pydantic_model_creator

class User(Model):
    id=fields.IntField(pk=True)
    name=fields.CharField(max_length=20)
    age=fields.IntField(max_length=100)
    gender=fields.CharField(max_length=20)
    net_worth=fields.IntField(max_length=10000000)
    duration=fields.IntField(max_length=10000000)
    yearly_salary=fields.IntField(max_length=1000000)

class SearchStocks(Model):
    search=fields.CharField(pk=True,max_length=1000000)

    

#create pydantic models 
#name,age,gender,duration,net_worth,duration,yearly_salary
user_pydantic=pydantic_model_creator(User,name="User")
user_pydanticIn=pydantic_model_creator(User,name="UserIn",exclude_readonly=True)

search_pydantic=pydantic_model_creator(SearchStocks,name="SearchStocks")



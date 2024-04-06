from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise #It allows us to trace the models, the database which we have creted 
from models import (user_pydantic,user_pydanticIn,User,search_pydantic,SearchStocks)
app=FastAPI()

#adding cors headers - interreleating data between two servers
from fastapi.middleware.cors import CORSMiddleware
origins =['http://localhost:3000']
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"]
)

#CREATION OF DIFFERENT FASTAPI
@app.get("/")
# @ : It is the decorator 
def index():
    return {"Msg":"go to /docs for the API documentation"}
#Types of API are GET,POST,PUT
@app.post('/user')
async def add_user(user_info:user_pydantic):
    user_obj=await User.create(**user_info.dict(exclude_unset=True))
    response = await user_pydantic.from_tortoise_orm(user_obj)
    return {"Status":"OK","data":response}

@app.post('/searchStocks')
async def searched_stocks(searched_stocks:search_pydantic):
    search_obj=await SearchStocks.create(**searched_stocks.dict(exclude_unset=True))
    response = await search_pydantic.from_tortoise_orm(search_obj)
    return {"Status":"OK","data":response}

@app.get('/getStocks')
async def get_all_stocks():
    response=await search_pydantic.from_queryset(SearchStocks.all())
    return{"Status":"OK","data":response}
#These are known as routes
@app.get('/user')
async def get_all_user():
    #Supplier class returning all the response
    response=await user_pydantic.from_queryset(User.all())
    return {"Status":"OK","data":response}

@app.get('/user/{user_id}')
async def get_specific_user(user_id:int):
    response =await user_pydantic.from_queryset_single(User.get(id=user_id))
    return {"status":"ok","data":response}



#async and await goes hand on hand 
#@app.put('/user/{user_id}')
#async def update_specific_supplier(user_id:int, update_info : user_pydanticIn):
 #   user = await User.get(id=user_id)
    update_info =update_info.dict(exclude_unset = True)
    user.name=update_info['name']
    user.company =update_info['company']
    user.phone=update_info['phone']
    user.email=update_info['email']
    await user.save()
    response=await user_pydantic.from_tortoise_orm(user)
    return {"status":"ok","data":response}

#@app.delete('/supplier/{supplier_id}')
#async def delete_supplier(supplier_id:int):
#    response=(await Supplier.get(id=supplier_id))
 #   await response.delete()
 #   return {"status":"ok"}


register_tortoise(
    app,
    db_url="sqlite://database.sqlite3",
    modules={"models":["models"]},
    generate_schemas=True,
    add_exception_handlers=True

)


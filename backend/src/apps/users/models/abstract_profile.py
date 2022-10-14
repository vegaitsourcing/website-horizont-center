from apps.caregivers.models import BaseModel



class AbstractUser(BaseModel):
    profile_image=models.TextField()
    gender=models.CharField() # pogledaj za enum 
    description=models.TextField()
    type_user=models.TextField() #caregivers && beneficial profile 
    postal_code=models.IntegerField()  
    city=models.CharField() 


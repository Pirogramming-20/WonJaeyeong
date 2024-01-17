from django.db import models
from apps.devtools.models import *
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.
class Idea(models.Model):
  title = models.CharField('제목',max_length=24)
  image = models.ImageField('이미지', blank=True, upload_to='ideas/%Y%m%d')
  content = models.TextField('아이디어 설명')
  # interest = models.IntegerField('아이디어 관심도',default=0)
  interest = models.IntegerField('아이디어 관심도', validators=[MinValueValidator(1),MaxValueValidator(5)])
  updated_date = models.DateTimeField('수정일', auto_created=True,auto_now=True)
  devtool = models.ForeignKey(Devtool,on_delete=models.CASCADE,verbose_name = '개발툴')
  star = models.BooleanField(default = False)
  
  def __str__(self):
    return self.title
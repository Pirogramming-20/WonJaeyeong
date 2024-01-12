from django.db import models

# Create your models here.
class Post(models.Model):
  title = models.CharField(max_length=50, verbose_name="제목")
  year = models.IntegerField(verbose_name="개봉 년도")
  genre = models.CharField(max_length=50, verbose_name="장르")
  rating = models.IntegerField(verbose_name="별점")
  runtime = models.IntegerField(verbose_name="러닝타임")
  review = models.TextField(verbose_name="리뷰")
  director = models.CharField(max_length=50, verbose_name="감독")
  actor = models.CharField(max_length=50, verbose_name="배우")
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
from django.urls import path, include
from . import views
from .views import *

urlpatterns = [
    path('', review_list),
    path('create/', review_create),
    path('post/<int:pk>/', review_read),
    path('update/<int:pk>/', review_update),
    path('delete/<int:pk>/', review_delete),
]
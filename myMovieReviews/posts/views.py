from django.shortcuts import render, redirect
from .models import Post

def review_list(request):
  posts = Post.objects.all()
  context = {
    "posts":posts
  }
  return render(request, 'review_list.html', context)


def review_create(request):
  if request.method == 'POST':
    Post.objects.create(
      title = request.POST["title"],
      year = request.POST["year"],
      genre = request.POST["genre"],
      rating = request.POST["rating"],
      runtime = request.POST["runtime"],
      review = request.POST["review"],
      director = request.POST["director"],
      actor = request.POST["actor"]
    )
    return redirect("/")
  return render(request, "review_create.html")

def review_read(request, pk):
  post = Post.objects.get(id=pk)
  context = {
    "post" : post
  }
  return render(request, "review_read.html", context)

def review_update(request, pk):
  post = Post.objects.get(id=pk)
  if request.method == 'POST':
    post.title = request.POST['title']
    post.year = request.POST['year']
    post.genre = request.POST['genre']
    post.rating = request.POST['rating']
    post.runtime = request.POST['runtime']
    post.review = request.POST['review']
    post.director = request.POST['director']
    post.actor = request.POST['actor']
    post.save()
    return redirect(f"/post/{pk}/")
  
  context = {
    'post':post
  }
  return render(request, "review_update.html", context)

def review_delete(request, pk):
  Post.objects.filter(id=pk).delete()
  return redirect("/")
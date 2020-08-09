from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def book(request):
    return HttpResponse("图书首页123")

def book_detail(request, book_id, category_id):
    return HttpResponse(f"book_id:{book_id},category_id:{category_id}")

def author_detail(request):
    author_id = request.GET.get("id")
    text = f"作者的id是{author_id}"
    return HttpResponse(text)
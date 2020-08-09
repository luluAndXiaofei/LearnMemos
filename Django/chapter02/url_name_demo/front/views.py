from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect, reverse
# Create your views here.

def index(request):
    username = request.GET.get("username")
    if username:
        text = f"前台首页。欢迎{username}"
        return HttpResponse(text)
    else:
        return redirect(reverse("front:login"))

def login(request):
    return HttpResponse("前台登陆首页")
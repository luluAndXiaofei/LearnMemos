from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
import json


def index(request):
    text = {
        "user_name": "lulu",
        "user_age": 18,
    }
    res = json.dumps(text)
    return HttpResponse(res)

def login(request):
    return HttpResponse("登陆首页")
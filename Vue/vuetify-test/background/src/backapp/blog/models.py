from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField('标题',max_length=80)
    body = models.TextField('内容', max_length=200, blank=True)
    created_time = models.DateTimeField('发布时间')
    updated_time = models.DateTimeField('更新时间')
    
    class Meta:
        verbose_name = '文章'
        verbose_name_plural = '文章'
        # 自定义表名。否则默认为app名_表名
        db_table = 'article'
        
    def __str__(self):
        return self.title
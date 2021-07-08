# Generated by Django 3.2.4 on 2021-07-08 03:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0019_auto_20210708_0318'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productfavorite',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.products'),
        ),
        migrations.AlterField(
            model_name='productfavorite',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterUniqueTogether(
            name='productfavorite',
            unique_together={('product', 'user')},
        ),
    ]

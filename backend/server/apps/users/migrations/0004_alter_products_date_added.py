# Generated by Django 3.2.4 on 2021-07-05 14:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_products_date_added'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='date_added',
            field=models.DateTimeField(default=datetime.datetime(2021, 7, 5, 14, 59, 58, 359731)),
        ),
    ]
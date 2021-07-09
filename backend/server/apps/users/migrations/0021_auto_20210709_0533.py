# Generated by Django 3.2.4 on 2021-07-09 05:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0020_auto_20210708_0329'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='producttype',
            name='product',
        ),
        migrations.AddField(
            model_name='products',
            name='product_type',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='users.producttype'),
            preserve_default=False,
        ),
    ]

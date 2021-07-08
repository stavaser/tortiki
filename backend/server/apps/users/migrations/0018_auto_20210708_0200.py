# Generated by Django 3.2.4 on 2021-07-08 02:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0017_auto_20210708_0157'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productspictures',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.products'),
        ),
        migrations.AlterField(
            model_name='producttype',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.products'),
        ),
    ]

# Generated by Django 3.2.4 on 2021-07-06 09:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0013_lotterywinner'),
    ]

    operations = [
        migrations.AddField(
            model_name='lotterywinner',
            name='lottery',
            field=models.ForeignKey(default=True, on_delete=django.db.models.deletion.CASCADE, to='users.productslottery'),
            preserve_default=False,
        ),
    ]

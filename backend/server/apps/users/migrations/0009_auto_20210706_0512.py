# Generated by Django 3.2.4 on 2021-07-06 05:12

import apps.users.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_lotteryparticipants_screenshot'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lotteryparticipants',
            name='screenshot',
        ),
        migrations.CreateModel(
            name='LotteryScreenshots',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('screenshot', models.ImageField(upload_to=apps.users.models.screenshots_path)),
                ('lottery_participant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.lotteryparticipants')),
            ],
        ),
    ]
# Generated by Django 3.2.4 on 2021-07-06 07:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_alter_lotteryparticipants_participant'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]
from django.db import models
from django.contrib.auth.models import User

# ------------------- Service -------------------
class Service(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title


# ------------------- Career -------------------
class Career(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    experience = models.CharField(max_length=100)
    skills = models.TextField()

    def __str__(self):
        return self.title


# ------------------- Job Application -------------------
class JobApplication(models.Model):
    career = models.ForeignKey(Career, on_delete=models.CASCADE, related_name="applications")
    name = models.CharField(max_length=255)
    email = models.EmailField()
    resume = models.FileField(upload_to="resumes/", blank=True, null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} applied for {self.career.title}"


# ------------------- Contact Message -------------------
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    message = models.TextField()

    def __str__(self):
        return f"{self.name} - {self.email}"


# ------------------- Chat Message -------------------
class ChatMessage(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        username = self.user.username if self.user else 'Guest'
        return f"{username}: {self.message[:20]}"

from django.contrib import admin
from django.utils.html import format_html
from .models import Service, Career, JobApplication, ContactMessage, ChatMessage

# ------------------- Service Admin -------------------
@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "description")
    search_fields = ("title", "description")

# ------------------- Job Applications Inline -------------------
class JobApplicationInline(admin.TabularInline):
    model = JobApplication
    extra = 0
    readonly_fields = ("name", "email", "resume_link", "submitted_at")
    can_delete = False

    def resume_link(self, obj):
        if obj.resume:
            return format_html('<a href="{}" target="_blank">📂 Download</a>', obj.resume.url)
        return "No Resume"
    resume_link.short_description = "Resume"

# ------------------- Career Admin -------------------
@admin.register(Career)
class CareerAdmin(admin.ModelAdmin):
    list_display = ("title", "experience", "skills")
    search_fields = ("title", "experience", "skills")
    inlines = [JobApplicationInline]  # Shows applied jobs inline

# ------------------- Job Application Admin -------------------
@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "career", "submitted_at", "resume_link")
    list_filter = ("career", "submitted_at")
    search_fields = ("name", "email", "career__title")
    readonly_fields = ("submitted_at",)

    def resume_link(self, obj):
        if obj.resume:
            return format_html('<a href="{}" target="_blank">📂 Download</a>', obj.resume.url)
        return "No Resume"
    resume_link.short_description = "Resume"

# ------------------- Contact Message Admin -------------------
@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "phone")
    search_fields = ("name", "email", "phone")

# ------------------- Chat Message Admin -------------------
@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ("user", "message", "created_at")
    search_fields = ("user__username", "message")
    list_filter = ("created_at",)

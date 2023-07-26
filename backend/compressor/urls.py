from compressor.api import PDFCompressApi

from django.urls import path

urlpatterns = [
    path("compress-pdf/", PDFCompressApi.as_view(), name="compress-pdf"),
]

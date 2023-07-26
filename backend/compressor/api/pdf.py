from rest_framework.views import APIView
from rest_framework.response import Response

from django.http import HttpResponse

from compressor.helpers import compress_pdf


class PDFCompressApi(APIView):
    def get(self, request, format=None):
        return Response({"status": "ok"})

    def post(self, request, format=None):
        uploaded_file = request.FILES["file"]

        file_name = uploaded_file.name

        with open(file_name, "wb") as file:
            for chunk in uploaded_file.chunks():
                file.write(chunk)

        output_file_name = compress_pdf(file_name)

        file = open(output_file_name, "rb")
        response = HttpResponse(file.read(), content_type="application/pdf")
        response["Content-Disposition"] = f"attachment; filename={output_file_name}"
        file.close()

        return response

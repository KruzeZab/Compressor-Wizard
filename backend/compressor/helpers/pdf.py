from PyPDF2 import PdfReader, PdfWriter


def compress_pdf(input_file):
    reader = PdfReader(input_file)
    writer = PdfWriter()

    for page in reader.pages:
        page.compress_content_streams()  # This is CPU intensive!
        writer.add_page(page)

    with open("out.pdf", "wb") as f:
        writer.write(f)

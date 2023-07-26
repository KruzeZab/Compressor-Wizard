from PIL import Image


def compress_and_convert_image(image_path, output_path, convert_to, quality=85):
    #     Open the image using Pillow
    image = Image.open(image_path)

    #     Compress and convert the image
    image.save(output_path, convert_to, quality=quality)


# compress_and_convert_image(input_image_path, output_image_path, convert_to="JPEG", quality=50)

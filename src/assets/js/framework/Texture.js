/**
 * @author Claudio
 * @date 02.02.2018
 * @version 1.0
 */

function Texture(gl, path) {
    const ID = Texture.count;
    Texture.count++;

    const hTexture = gl.genTexture();
    gl.activeTexture(TextureUnit.Texture0 + ID);
    gl.bindTexture(TextureTarget.Texture2D, hTexture);


    //todo fix textures

//     var bitmap = (Bitmap) Image.FromFile(path);
//     Width = bitmap.Width;
//     Height = bitmap.Height;
//
//     var channels = alpha ? 4 : 3;
//     var data = new byte[Width * Height * channels];
//
//     for (var y = 0; y < Height; y++)
//     {
//         for (var x = 0; x < Width; x++)
//         {
//             var pixel = bitmap.GetPixel(x, y);
//             var i = (y * Width + x) * channels;
//             data[i] = pixel.B;
//             data[i + 1] = pixel.G;
//             data[i + 2] = pixel.R;
//             if (alpha)
//                 data[i + 3] = pixel.A;
//         }
//     }
//     GL.TexImage2D(TextureTarget.Texture2D, 0,
//         alpha ? PixelInternalFormat.Srgb8Alpha8 : PixelInternalFormat.Srgb8, Width, Height, 0,
//         alpha ? PixelFormat.Rgba : PixelFormat.Rgb,
//         PixelType.UnsignedByte, data);
//     GL.GenerateMipmap(GenerateMipmapTarget.Texture2D);
// }
//
// /// <summary>
// /// Creates a texture from texture resource folder
// /// </summary>
// /// <param name="name">File name with extension</param>
// /// <param name="alhpa">Include alpha channel for transparency</param>
// /// <returns>Texture</returns>
// public static Texture CreateTexture(string name, bool alhpa = false) => new Texture(@"Res\Textures\" + name, alhpa);
//
// /// <summary>
// /// Creates a texture from heightmap resource folder
// /// </summary>
// /// <param name="name">File name with extension</param>
// /// <returns>Texture</returns>
// public static Texture CreateHeightMap(string name) => new Texture(@"Res\HeightMaps\" + name);
}

Texture.count = 0;
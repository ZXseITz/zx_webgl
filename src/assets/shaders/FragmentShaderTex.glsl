precision highp float;
precision highp int;

varying vec3 f_pos;
varying vec3 f_normal;
varying vec4 f_color;
varying vec2 f_uv;

uniform sampler2D textureMap;
uniform vec4 ambient;
uniform vec3 lightPosition;

void main()
{
  vec4 textureColor = texture(textureMap, f_uv);

  vec3 toLight = normalize(lightPosition - f_pos);
  float beta = max(0.0, dot(toLight, f_normal));
  vec4 diffuse = beta * f_color;
  vec3 r = 2.0 * beta * f_normal - toLight;
  vec4 specular = pow(max(0.0, -dot(r, normalize(f_pos))), 20.0) * vec4(1);

  gl_FragColor = ambient + diffuse * textureColor + specular;
}
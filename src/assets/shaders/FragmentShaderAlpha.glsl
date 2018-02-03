precision highp float;
precision highp int;

varying vec3 f_pos;
varying vec3 f_normal;
varying vec4 f_color;

uniform vec4 ambient;
uniform vec3 lightPosition;

void main()
{
  vec3 toLight = normalize(lightPosition - f_pos);
  float b = dot(toLight, f_normal);
  float beta = max(b, 1.0 - b);
  vec4 diffuse = beta * f_color;
  vec3 r = 2.0 * beta * f_normal - toLight;
  vec4 specular = pow(max(0.0, -dot(r, normalize(f_pos))), 20.0) * vec4(1);

  gl_FragColor = ambient + diffuse + specular;
}
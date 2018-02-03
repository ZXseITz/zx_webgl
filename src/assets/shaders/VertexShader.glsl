attribute vec3 pos;
attribute vec3 normal;
attribute vec4 color; //rgba

uniform mat4 P; //projection
uniform mat4 M; //transformation

varying vec3 f_pos;
varying vec3 f_normal;
varying vec4 f_color;

void main()
{
  vec4 p4 =  M * vec4(pos, 1);
  f_pos = p4.xyz;
  f_normal = (M * vec4(normal, 0)).xyz;
  f_color = color;

  gl_Position = P * p4;
}
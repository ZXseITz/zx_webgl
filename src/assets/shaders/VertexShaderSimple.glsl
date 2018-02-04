attribute vec3 pos;
attribute vec4 color; //rgba

uniform mat4 P; //projection
uniform mat4 M; //transformation

varying vec4 f_color;

void main()
{
  gl_Position =  P * M * vec4(pos, 1);
  f_color = color;
}
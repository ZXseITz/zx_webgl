﻿#version 400 core

in vec3 f_pos;
in vec3 f_normal;
in vec4 f_color;

uniform vec4 ambient;
uniform vec3 lightPosition;

out vec4 color;

void main()
{
  vec3 toLight = normalize(lightPosition - f_pos);
  float beta = max(0, dot(toLight, f_normal));
  vec4 diffuse = beta * f_color;
  vec3 r = 2 * beta * f_normal - toLight;
  vec4 specular = pow(max(0, -dot(r, normalize(f_pos))), 20) * vec4(1);

  color = ambient + diffuse + specular;
}
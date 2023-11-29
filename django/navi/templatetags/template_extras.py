from django import template

register = template.Library()
@register.filter
def to_int(value):
    return int(value,16)
@register.filter
def to_space(value):
    return value.replace('_',' ')

import React from 'react'
import { Field, reduxForm } from 'redux-form'

export const minLength = (min) => value =>
  value && value.length < min ? `el campo debe tener ${min} caracteres como mínimo.` : null

export const maxLength = (max) => value =>
  value && value.length > max ? `El campo debe tener ${max} caracteres como máximo}` : null

export const email = (value) =>
  value && !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
    ? 'Formato de email invalido' : undefined

export const emptyValue = (value) => value && '' ? 'El campo no puede ser vacío' : null

export const oneLetterPasssword = (value) => value && !(/\d/.test(value)) ? "La contraseña debe contener al menos un número" : null

export const maxLength52 = maxLength(52)
export const minLength8 = minLength(8)

import React, { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

import axiosService from '../../utils/axiosService'

interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
}

const ContactForm = (): ReactElement => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
  })

  const onSubmit = async (data: FormData) => {
    const { firstName, lastName, email, message } = data

    try {
      const result = await axiosService.post('/mail', {
        name: `${firstName} ${lastName}`,
        email,
        message,
      })
      if (result && result.status === 200) {
        toast.success('Erfolgreich versandt')
        reset()
      } else {
        toast.error('E-Mail Versand fehlgeschlagen')
      }
    } catch (e) {
      toast.error('E-Mail Versand fehlgeschlagen')
    }
  }

  const renderSubmitButton = (): ReactElement => (
    <button
      className={`${
        isValid ? 'hover:bg-primary bg-neutral' : 'bg-gray-400'
      } w-full shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4`}
      type="button"
      onClick={handleSubmit(onSubmit)}
      disabled={Object.keys(errors).length !== 0}
    >
      Send
    </button>
  )

  return (
    <>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Vorname
            </label>
            <input
              className={`${
                errors.firstName ? 'border-red-500' : 'focus:border-gray-500'
              } appearance-none block w-full text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="grid-first-name"
              type="text"
              {...register('firstName', { required: true })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Nachname
            </label>
            <input
              className={`${
                errors.lastName ? 'border-red-500' : 'focus:border-gray-500'
              } appearance-none block w-full text-gray-700 border py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
              id="grid-last-name"
              type="text"
              {...register('lastName', { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className={`${
                errors.email ? 'border-red-500' : 'focus:border-gray-500'
              } appearance-none block w-full text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="email"
              type="email"
              {...register('email', {
                required: true,
                pattern:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Nachricht
            </label>
            <textarea
              className={`${
                errors.message ? 'border-red-500' : 'focus:border-gray-500'
              } resize appearance-none block w-full text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none`}
              id="message"
              {...register('message', { required: true })}
            />
          </div>
        </div>

        {!isValid ? (
          <div className="tooltip w-full" data-tip="Ungültige Eingabe">
            {renderSubmitButton()}
          </div>
        ) : (
          renderSubmitButton()
        )}
      </form>
      <Toaster />
    </>
  )
}

export default ContactForm

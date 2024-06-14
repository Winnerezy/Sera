export const AuthButton = ({ formAction, type }: { formAction: (formData: FormData) => Promise<void>, type: string }) => {
  return (
    <button formAction={formAction}className='w-36 h-10 rounded-md font-semibold text-md bg-[var(--button-bg)] p-2 self-center tracking-wide hover:bg-[var(--button-hover)]'>{ type }</button>
  )
}

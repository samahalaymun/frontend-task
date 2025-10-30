import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "./loginSchema"
import AuthLayout from "@/app/layouts/AuthLayout"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"
import ErrorMessage from "@/components/common/ErrorMessage"

export default function LoginPage() {
  let [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })
  const navigate = useNavigate()
  const { mutate, isPending, isError, error } = useAuth()

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/")
      },
    })
  }

  return (
    <AuthLayout>
      <p className="text-red-500">{searchParams.get("message")}</p>
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <Input
          {...register("username")}
          type="text"
          placeholder="Username"
          className="px-2 py-5  border rounded"
        />
        <ErrorMessage message={errors.username?.message} />

        <Input
          {...register("password")}
          placeholder="Password"
          type="password"
          className="px-2 py-5  border rounded"
        />
        <ErrorMessage message={errors.password?.message} />
        {isError && (
          <ErrorMessage
            message={error?.response?.data?.message || "Login failed"}
          />
        )}
        <Button type="submit" className="px-2 py-5  rounded">
          {isPending && <Spinner />}
          Login
        </Button>
      </form>
    </AuthLayout>
  )
}

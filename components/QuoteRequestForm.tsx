"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Họ tên phải có ít nhất 2 ký tự.",
  }),
  email: z.string().email({
    message: "Vui lòng nhập địa chỉ email hợp lệ.",
  }),
  phone: z.string().min(10, {
    message: "Số điện thoại phải có ít nhất 10 số.",
  }),
  socialLink: z.string().optional(),
  serviceType: z.string({
    required_error: "Vui lòng chọn loại dịch vụ.",
  }),
  budget: z.string().optional(),
  message: z.string().min(10, {
    message: "Mô tả dự án phải có ít nhất 10 ký tự.",
  }),
})

export function QuoteRequestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      socialLink: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Yêu cầu đã được gửi thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      variant: "default",
    })
    form.reset()
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Họ tên</FormLabel>
                  <FormControl>
                    <Input placeholder="Nguyễn Văn A" {...field} className="border-primary/20 focus-visible:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@gmail.com" {...field} className="border-primary/20 focus-visible:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số điện thoại</FormLabel>
                  <FormControl>
                    <Input placeholder="0912345678" {...field} className="border-primary/20 focus-visible:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="socialLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook/Zalo</FormLabel>
                  <FormControl>
                    <Input placeholder="Link Facebook hoặc số Zalo" {...field} className="border-primary/20 focus-visible:ring-primary" />
                  </FormControl>
                  <FormDescription>
                    Cung cấp link Facebook hoặc số Zalo để chúng tôi dễ dàng liên hệ
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loại dịch vụ</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-primary/20 focus-visible:ring-primary">
                        <SelectValue placeholder="Chọn loại dịch vụ" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="website-design">Thiết kế website theo yêu cầu</SelectItem>
                      <SelectItem value="n8m-source">Source code n8m có hỗ trợ</SelectItem>
                      <SelectItem value="ecommerce">Website thương mại điện tử</SelectItem>
                      <SelectItem value="landing-page">Landing page</SelectItem>
                      <SelectItem value="web-app">Ứng dụng web</SelectItem>
                      <SelectItem value="other">Khác</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ngân sách dự kiến</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-primary/20 focus-visible:ring-primary">
                        <SelectValue placeholder="Chọn ngân sách dự kiến" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="under-5m">Dưới 5 triệu</SelectItem>
                      <SelectItem value="5m-10m">5 - 10 triệu</SelectItem>
                      <SelectItem value="10m-20m">10 - 20 triệu</SelectItem>
                      <SelectItem value="20m-50m">20 - 50 triệu</SelectItem>
                      <SelectItem value="over-50m">Trên 50 triệu</SelectItem>
                      <SelectItem value="flexible">Linh hoạt</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mô tả yêu cầu</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Mô tả chi tiết về dự án hoặc yêu cầu của bạn..." 
                    className="min-h-[120px] border-primary/20 focus-visible:ring-primary"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full md:w-auto rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            <Send className="mr-2 h-4 w-4" /> Gửi yêu cầu báo giá
          </Button>
        </form>
      </Form>
    </div>
  )
}

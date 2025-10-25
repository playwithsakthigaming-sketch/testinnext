
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Eye, EyeOff } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { submitApplication } from './actions';
import { Progress } from '@/components/ui/progress';

const passwordStrengthSchema = z.string().min(8, 'Password must be at least 8 characters long');

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  steamId: z.string().min(1, 'A valid Steam ID is required'),
  truckersmpUrl: z.string().url('A valid TruckersMP URL is required'),
  truckershubId: z.string().min(1, 'A valid TruckersHub ID is required'),
  password: passwordStrengthSchema,
  confirmPassword: z.string(),
  agreeToRules: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the rules to proceed.',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type ApplicationFormValues = z.infer<typeof formSchema>;

const rules = [
    "Respect all drivers, staff and other VTC members.",
    "Follow all TruckersMP rules.",
    "Drive realistically and safely.",
    "No excessive use of foul language.",
    "Do not impersonate staff members.",
    "Keep your truck and trailer in good condition (no excessive damage).",
];

const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
};

export function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      steamId: '',
      truckersmpUrl: '',
      truckershubId: '',
      password: '',
      confirmPassword: '',
      agreeToRules: false,
    },
  });

  async function onSubmit(data: ApplicationFormValues) {
    setIsSubmitting(true);
    const result = await submitApplication(data);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: 'Application Submitted!',
        description: 'Your application has been sent for review. You will now be redirected to complete the final step on TruckersMP.',
      });
      setTimeout(() => {
        window.location.href = 'https://truckersmp.com/vtc/73933/recruitment-form/3515-driver-recruitment-form';
      }, 3000);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.message || 'An unexpected error occurred.',
      });
    }
  }

  const passwordStrength = getPasswordStrength(password);
  const strengthText = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][passwordStrength];
  const strengthColor = ['bg-red-700', 'bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-green-700'][passwordStrength];


  return (
    <div className="space-y-8">
       <Progress value={(step / 2) * 100} className="w-full" />
       
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">VTC Rules and Regulations</h3>
              <ul className="space-y-2 list-disc list-inside bg-card p-4 rounded-md border">
                {rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
              <FormField
                control={form.control}
                name="agreeToRules"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I have read and agree to all the VTC rules.
                      </FormLabel>
                       <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <Button type="button" onClick={() => form.trigger('agreeToRules').then(isValid => isValid && setStep(2))}>Next</Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="name" render={({ field }) => ( <FormItem> <FormLabel>Full Name</FormLabel> <FormControl><Input placeholder="Your full name" {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
                <FormField control={form.control} name="email" render={({ field }) => ( <FormItem> <FormLabel>Email Address</FormLabel> <FormControl><Input placeholder="your.email@example.com" {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
              </div>

               <FormField control={form.control} name="steamId" render={({ field }) => ( <FormItem> <FormLabel>SteamID</FormLabel> <FormControl><Input placeholder="e.g. 7656119..." {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
               <FormField control={form.control} name="truckersmpUrl" render={({ field }) => ( <FormItem> <FormLabel>TruckersMP Profile URL</FormLabel> <FormControl><Input placeholder="https://truckersmp.com/user/..." {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
               <FormField control={form.control} name="truckershubId" render={({ field }) => ( <FormItem> <FormLabel>TruckersHub Profile ID</FormLabel> <FormControl><Input placeholder="e.g. 2228" {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
              
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Create a strong password"
                            {...field}
                            onChange={(e) => {
                                field.onChange(e);
                                setPassword(e.target.value);
                            }}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </FormControl>
                       <div className="mt-2">
                            <Progress value={(passwordStrength / 5) * 100} className={strengthColor} />
                            <p className="text-xs mt-1 text-muted-foreground">{strengthText}</p>
                        </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField control={form.control} name="confirmPassword" render={({ field }) => ( <FormItem> <FormLabel>Confirm Password</FormLabel> <FormControl><Input type="password" placeholder="Confirm your password" {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
              </div>

              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>Back</Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : 'Submit Application'}
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}

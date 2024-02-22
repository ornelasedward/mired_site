import CustomButton from "@/components/ui/custom-button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <div className=" bg-skin-pink-50 relative z-50 py-20">
      <div className=" container">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className=" heading-1">Let&apos; Get To Work</h2>
          <p className="my-3 max-w-[600px] mx-auto leading-8">
            We would love to learn more about your business. If you would like
            to get in touch, please use the form below.
          </p>
        </div>

        <div>
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
            <Input
              type="text"
              name="name"
              placeholder="What's Your Name?"
              className="rounded-none sm:px-6 h-12"
            />
            <Input
              type="email"
              name="email"
              placeholder="What's your email address?"
              className="rounded-none sm:px-6 h-12"
            />
            <Input
              type="text"
              name="website"
              placeholder="What's your website address?"
              className="rounded-none sm:px-6 h-12"
            />
            <Input
              type="text"
              name="ads"
              placeholder="Have you done paid ads? If yes, how long?"
              className="rounded-none sm:px-6 h-12"
            />
            <Select>
              <SelectTrigger className="rounded-none sm:px-6 h-12">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <Input
              type="text"
              name="priceMind"
              placeholder="Do you have a price in mind?"
              className="rounded-none px-6 h-12"
            />
            <Textarea
              name="help"
              id=""
              placeholder="The biggest thing we can help with?"
              cols={30}
              rows={8}
              className="px-6 py-4"
            ></Textarea>
            <Textarea
              name="help"
              id=""
              placeholder="Is there anything else we should know?"
              cols={30}
              rows={8}
              className="px-6 py-4"
            ></Textarea>
          </form>
          <div className="flex justify-center mt-12">
            <CustomButton>submit Your Consultation </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

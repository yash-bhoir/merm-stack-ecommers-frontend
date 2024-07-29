
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { Input } from "../ui/Input "
import { Label } from "../ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";
import { Textarea } from "../ui/TextArea";
import { Button } from "../ui/ButtonVariants "
import { DatePickerDemo } from "../ui/DatePicker"; // Assuming you have a DatePicker component
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function AddItem() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length <= 3) {
      setImages((prevImages) => [...prevImages, ...files]);
    } else {
      toast.error("You can only upload a maximum of 3 images.");
    }
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <Card className="w-auto">
      <ToastContainer />
      <CardHeader>
        <CardTitle>Add Product</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex w-full">
              <div className="w-1/2 flex flex-col space-y-4 pr-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Product name*</Label>
                  <Input id="name" placeholder="Enter Product Name" />
                </div>
                <div className="flex space-x-4">
                  <div className="flex flex-col space-y-1.5 w-1/2">
                    <Label htmlFor="category">Category *</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5 w-1/2">
                    <Label htmlFor="gender">Gender*</Label>
                    <Select>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="brand">Brand*</Label>
                  <Select>
                    <SelectTrigger id="brand">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="description">Description*</Label>
                  <Textarea id="description" placeholder="Description..." />
                  <h6>Do not exceed 100 characters when entering the product name.</h6>
                </div>
              </div>
              <div className="w-1/2 flex flex-col space-y-4 pl-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="images">Upload Images</Label>
                  <Input
                    id="images"
                    type="file"
                    multiple
                    onChange={handleImageUpload}
                    className="file:mr-4 file:py-2 file:px-4
                              file:rounded-full file:border-0
                              file:text-sm file:font-semibold
                              file:bg-violet-50 file:text-violet-700
                              hover:file:bg-violet-100"
                  />
                  {images.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {images.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`upload-${index}`}
                            className="h-24 w-24 object-cover rounded"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="productDate">Product Date</Label>
                  <DatePickerDemo />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end w-full">
              <Button type="submit" className="bg-black text-white">Add Product</Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* Additional footer content if needed */}
      </CardFooter>
    </Card>
  );
}

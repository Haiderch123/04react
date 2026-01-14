import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border-none"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="border-none">
        <div className="text-red-600 font-bold text-xl flex items-center justify-center pb-10 ">
         questions
        </div>
      </AccordionItem>

      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="font-bold p-4 leading-5  ">
          What is the starting price of new MG Hector car?
        </AccordionTrigger>
        <AccordionContent className="pl-8">
          <p>The starting price of MG Hector is 13.99 Lakhs BTN onwards.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-none">
        <AccordionTrigger className="font-bold p-4 leading-5">
          Does MG Hector car has sunroof?
        </AccordionTrigger>
        <AccordionContent className="pl-8" >
          <p>The starting price of MG Hector is 13.99 Lakhs BTN onwards.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-none">
        <AccordionTrigger className="font-bold p-4 leading-5 ">
          What are the key features of MG hector car?
        </AccordionTrigger>
        <AccordionContent className="pl-8">
          <p>The starting price of MG Hector is 13.99 Lakhs BTN onwards.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-none">
        <AccordionTrigger className="font-bold p-4 leading-5">
          How many colors are available in MG Hector?
        </AccordionTrigger>
        <AccordionContent className="pl-8">
          <p>The starting price of MG Hector is 13.99 Lakhs BTN onwards.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="border-none">
        <AccordionTrigger className="font-bold p-4 leading-5">
          What is ADAS Autonomous Level-2 technology in MG Hector Plus?
        </AccordionTrigger>
        <AccordionContent className="pl-8">
          <p>The starting price of MG Hector is 13.99 Lakhs BTN onwards.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

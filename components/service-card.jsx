import Image from "next/image";

function ServiceCard({ service }) {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800 dark:text-white flex-1">
      <Image src={service.imgsrc} width={100} height={100} />
      <h3 className="text-lg font-medium pt-8 pb-2 ">{service.title} </h3>
      <p className="py-2">{service.details}</p>
      {(service.tools && service.tools.length !== 0) && (
        <h4 className="py-4 text-teal-600">{`Tools I Use`}</h4>
      )}
      {service.tools &&
        service.tools.map((tool) => (
          <p key={tool.id} className="text-gray-800 dark:text-gray-50 py-1">
            {tool.name}
          </p>
        ))}
    </div>
  );
}

export default ServiceCard;


function PortfolioImage({img}) {
  return (
    <div className="basis-1/3 flex-1">
      <img
        className="rounded-lg object-cover h-full w-full"
        src={img.src}
        width={img.height}
        height={img.width}
      />
    </div>
  );
}

export default PortfolioImage;

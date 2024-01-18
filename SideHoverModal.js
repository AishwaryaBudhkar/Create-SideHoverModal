import BusinessModal from "./BusinessModal";
import ProductModal from "./ProductModal";
import ServiceModal from "./ServiceModal";
import "./SideHoverModal.css";
import TechnologyModal from "./TechnologyModal";

const SideHoverModal = ({handleClick,page}) =>{

    return (
        <div id="hover-modal" onClick={()=>handleClick()}  data-aos='slide-right' data-aos-duration='500' className="bussiness-modal  p-0 m-0  position-fixed  ">
           {page === 'bussiness' && <BusinessModal />}
            {page === 'services' &&  <ServiceModal/>}
            {page === 'product' &&  <ProductModal/>}
            {page === 'technology' &&  <TechnologyModal/>}

      </div>
    )
}

export default SideHoverModal;
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Image, { StaticImageData } from 'next/image';
import brandDell from "../../../../../../public/assets/img/brand/Dell.png";
import brandXiaomi from "../../../../../../public/assets/img/brand/Xiaomi.png";
import brandAdidas from "../../../../../../public/assets/img/brand/Adidas.png";
import brandHalal from "../../../../../../public/assets/img/brand/FreshFood.png";


interface brand {
    id: number;
    brandTitle: string;
    brandImg: StaticImageData; 
}

interface Brand {
    id: number;
    brandTitle: string;
    brandImg: StaticImageData; 
}

interface FirstPopupProps {
    open: boolean;
    handleBrandDialogClose: () => void;
    product_data: any; 
    setSelectedBrandFilteredData: (data: any) => void; 
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BrandPopup: React.FC<FirstPopupProps> = ({ open, handleBrandDialogClose, product_data, setSelectedBrandFilteredData }) => {
    const [selectedBrand, setSelectedBrand] = useState<string[]>([]);

    const brandList: Brand[] = [
        { id: 1, brandTitle: "Dell", brandImg: brandDell },
        { id: 2, brandTitle: "Adidas", brandImg: brandAdidas },
        { id: 3, brandTitle: "Organic Food", brandImg: brandHalal },
        { id: 4, brandTitle: "Xiaomi", brandImg: brandXiaomi },
    ];

    const handlebrandList = (brandTitle: string) => {
        if (selectedBrand.includes(brandTitle)) {
            const newBrand = selectedBrand.filter((cat) => cat !== brandTitle);
            setSelectedBrand(newBrand);
        } else {
            setSelectedBrand([...selectedBrand, brandTitle]);
        }
    };


    const handleProductbrandData = () => {
        const filteredBrandData = product_data.filter((item: { brand: string; }) => selectedBrand.includes(item.brand));
        setSelectedBrandFilteredData(filteredBrandData);
    };


    return (
        <div className='inventual-common-modal'>
            <BootstrapDialog
                onClose={handleBrandDialogClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <div className='inventual-modal-title'>
                    <div className="pb-3">
                        <h5 className='text-[22px]'>Select Brand</h5>
                    </div>
                    <button autoFocus onClick={handleBrandDialogClose} type='button'><i className="fa-regular fa-xmark"></i></button>
                </div>
                <DialogContent dividers>
                    <div className='inventual-common-modal-width-medium width-full'>
                        <div className="inventual-popup-form-wrapper">
                            <div className="inventual-popup-form pt-5 pb-5 maxSm:py-4 flex flex-col gap-3">
                                <div className='flex flex-wrap justify-center md:justify-between gap-5'>
                                    {brandList?.map((item) => (
                                        <div key={item.id}
                                            onClick={
                                                () => handlebrandList(item.brandTitle)
                                            }
                                            className={`w-[290px] sm:w-[140px] h-[180px] flex items-center justify-center bg-gray flex-col rounded-md border ${selectedBrand.includes(item.brandTitle) ? 'border-blue-500' : 'border-border'}`
                                            }>
                                            <Image
                                                src={item.brandImg}
                                                style={{ width: "100px", height: '100px' }}
                                                className='rounded-md'
                                                alt=""
                                                priority
                                            />

                                            <h5 className='mt-2 font-semibold text-heading'>{item.brandTitle}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <button
                        className='inventual-btn' type='button'
                        onClick={
                            (e) => {
                                handleProductbrandData()
                                handleBrandDialogClose()
                            }
                        }
                    >
                        Done
                    </button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
};

export default BrandPopup;

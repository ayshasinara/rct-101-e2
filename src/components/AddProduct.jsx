import React from "react";
import { useDisclosure,Button,Input,Select,RadioGroup,Radio,Modal,ModalBody, ModalOverlay} from '@chakra-ui/react'

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button  onClick={onOpen} my={4} data-cy="add-product-button">Add New Product</Button>
      <Modal isOpen={isOpen}  onClose={onClose} >
        
        <ModalBody pb={6}>
          <label>Title</label>
          <Input data-cy="add-product-title" placeholder="Title" />
          <label>Category</label>
          <Select data-cy="add-product-category">
          <option data-cy="add-product-category-category">Category</option>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" placeholder="Price" />
          <Button data-cy="add-product-submit-button">Create</Button>
        </ModalBody>
      
        
      </Modal>
    </>
  );
};

export default AddProduct;

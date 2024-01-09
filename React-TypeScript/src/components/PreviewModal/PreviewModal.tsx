import { Button, Modal } from "antd"
import "./PreviewModal.css";
import { useState } from "react";
import { updateItemsInInventory } from "../../features/project-model/projectModel.service";

export type PreviewModalProps = {
    isOpen: boolean,
    onClose: any,
    availableQuantity: any,
    requiredQuantity: any,
    lastPossibleItem: any,
    isReadyForProduction: boolean,
    projectModelList: string[]
}

export const PreviewModal = ({isOpen,onClose,availableQuantity,requiredQuantity,lastPossibleItem, isReadyForProduction, projectModelList}: PreviewModalProps) => {

    const handleProduction = async () => {
        await updateItemsInInventory(projectModelList);
        onClose();
    }

  return (
    <>
        <Modal
            open={isOpen}
            footer={false}
            onCancel={onClose}
            style={{width: "100%", height: "600px", resize: 'none'}}
        >
            <div className="modalContainer">
                <div className="required-quantity">
                    <h2>Required Quantity for production</h2>
                    {Object.keys(requiredQuantity).map((item,index) => {
                        return (
                            <div className={`projectItem ${requiredQuantity[item] <= availableQuantity[item] ? "available" : "notAvailable" }`}>
                                <span>{item} :</span>
                                <span>{requiredQuantity[item]}</span>
                            </div>
                        )
                    })}
                </div>

                <div className="available-quantity">
                    <h2>Available Quantity in warehouse</h2>
                    {Object.keys(availableQuantity).map((item,index) => {
                        return (
                            <div className="projectItem">
                                <span>{item} :</span>
                                <span>{availableQuantity[item]}</span>
                            </div>
                        )
                    })}
                </div>

                {isReadyForProduction ? (
                    <Button onClick={handleProduction}>
                        Confirm For Production
                    </Button>       
                ) : (
                    <>
                        Last Item till which production can be done :- {lastPossibleItem}
                    </>
                )}
                    
            </div>
        </Modal>
    </>
  )
}


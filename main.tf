provider "azurerm" {
  version = "2.0"

  features {}
}

resource "azurerm_resource_group" "dathway_rg" {
  name     = "dathway-rg"
  location = "UAE North"
}

variable "ARM_CLIENT_SECRET" {
  description = "The client secret for authentication with Azure"
  default = "$ARM_CLIENT_SECRET"
}
variable "ARM_CLIENT_ID" {
  description = "The client secret for authentication with Azure"
  default = "$ARM_CLIENT_ID"
}
variable "stg_acc_name" {
  type = string
  default = "stackonstorageaccount"
}

variable "stg_con_name" {
  type = string
  default = "stackonstoragecontainer"
}

resource "azurerm_kubernetes_cluster" "dathway_aks" {
  name                = "dathway-aks"
  location            = azurerm_resource_group.dathway_rg.location
  resource_group_name = azurerm_resource_group.dathway_rg.name
  dns_prefix          = "dathway-aks"
  kubernetes_version  = "1.18.10"

  linux_profile {
    admin_username = "azureuser"

    ssh_key {
      key_data = file("~/.ssh/id_rsa.pub")
    }
  }
   default_node_pool {
    name       = "default"
    node_count = 3
    vm_size    = "Standard_D2_v2"
  }

   service_principal {
     client_id = "${var.ARM_CLIENT_ID}"
     client_secret = "${var.ARM_CLIENT_SECRET}"
   }

  role_based_access_control {
    enabled = false
  }

}



resource "azurerm_kubernetes_cluster_node_pool" "gpu_pool" {
  name = "dathwaygpu"
  kubernetes_cluster_id = azurerm_kubernetes_cluster.dathway_aks.id
  vm_size = "Standard_NC6s_v3"
  node_count = 1
}

resource "azurerm_storage_account" "storageaccount" {
  name = var.stg_acc_name
  resource_group_name = azurerm_resource_group.dathway_rg.name
  location = azurerm_resource_group.dathway_rg.location
  account_tier = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_storage_container" "storage-container" {
  name = var.stg_con_name
  storage_account_name = azurerm_storage_account.storageaccount.name
  container_access_type = "private"
}

terraform {
        backend "azurerm" {
            resource_group_name = "one2oneapi"
            storage_account_name = "one2onestorageaccount"
            container_name = "one2oneblobcontainer"
            key = "terraform.tfstate"
        }
    }
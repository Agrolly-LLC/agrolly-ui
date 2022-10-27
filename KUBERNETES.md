# Deployment to Kubernetes

Deploy Agrolly-Web to a Kubernetes cluster on IBM Cloud. Here the Kuber

## Pre-requisites

1. Register for an [IBM Cloud account](https://developer.ibm.com/dwwi/jsp/register.jsp?eventid=cfc-2020-projects).
2. [Setup the CLIs](https://cloud.ibm.com/docs/containers?topic=containers-cs_cli_install)
3. [Setup a Virtual Private Cloud (VPC) in IBM Cloud](<#setup-a-virtual-private-cloud-(VPC)-in-IBM-cloud>)
4. [Setup a Kubernetes VPC Gen 2 cluster on the IBM Cloud](#set-up-a-kubernetes-VPC-gen-2-cluster-on-the-IBM-Cloud-VPC)

### Setup a Virtual Private Cloud (VPC) in IBM Cloud

1. [VPC Get Started guide](https://cloud.ibm.com/docs/vpc?topic=vpc-getting-started)
2. [Create VPC from IBM Cloud console guide](https://cloud.ibm.com/docs/vpc?topic=vpc-creating-a-vpc-using-the-ibm-cloud-console)

### Set up a Kubernetes VPC Gen 2 cluster on the IBM Cloud

1. The Kubernetes cluster is created in a VPC Gen 2 cluster. Make sure a VPC is created by following [VPC setup guides.](<#setup-a-virtual-private-cloud-(VPC)-in-IBM-cloud>)
2. Create a Kubernetes cluster for the VPC created in the previous step,

   - In the [IBM Cloud Catalog](https://cloud.ibm.com/catalog?category=containers), select **Kubernetes Service**. A cluster configuration page opens.
   - Give your cluster a unique name, example: `agrolly-web`.
   - From the **Pricing plan** dropdown, select the **Standard** cluster option.
   - In **Orchestration service** section, select the **Kubernetes** option.
   - In **Infrastructure** section, select the **VPC** option. Choose the VPC verified in step 1.
   - Select the **Resource group** for your cluster.
   - From the **Worker pool** section,
     - Configure the flavor and number worker nodes required for the cluster.
     - Enter a unique name for the worker pool.
     - From **Master service endpoint**, select **Both private & public endpoints** option.
   - In **Resource details** section,
     - Enter a unique cluster name, example: `agrolly-k8-cluster`
     - Optionally enter tags, example: env:prod, version-1

   To learn more about creating VPC Gen 2 cluster click [link](https://cloud.ibm.com/docs/containers?topic=containers-getting-started#vpc-gen2-gs).

3. While your cluster is provisioning, set up your local workstation with the client tools.

- Download and install a few CLI tools and the Kubernetes Service plug-in.

  ```shell-script
  curl -sL https://ibm.biz/idt-installer | bash
  ```

- Log in to your IBM Cloud account. Include the --sso option if you have a federated ID.

  ```shell-script
  ibmcloud login -a cloud.ibm.com -r <region> -g <resource-group>
  ```

- Set the Kubernetes context to your cluster for this terminal session. This command will fail if the cluster isn't yet ready.

  ```shell-script
  ibmcloud ks cluster config --cluster <your cluster id>
  ```

- Verify that you can connect to your cluster.

  ```shell-script
  kubectl config current-context
  ```

- Now, you can run `kubectl` commands to manage your cluster on the IBM Cloud. For a full list of commands, see the [Kubernetes docs](https://kubectl.docs.kubernetes.io/).

## Deploy Agrolly Web App to Kubernetes VPC Gen 2 cluster

1. Setup [IBM Cloud Container Registry](https://cloud.ibm.com/docs/Registry?topic=Registry-getting-started)

   - [Install IBM Cloud Container Registry CLI](https://cloud.ibm.com/docs/Registry?topic=Registry-getting-started#gs_registry_cli_install)
   - [Setup a namespace in Container Registry](https://cloud.ibm.com/docs/Registry?topic=Registry-getting-started#gs_registry_namespace_add)

2. Build the docker image with `<region>.icr.io/<my_namespace>/<new_image_repo>:<new_tag>` naming convention to later push into IBM Cloud Container Registry <br>
   For example: `docker build . -t us.icr.io/agrolly-workspace/agrolly-web:v1`

3. [Push Docker image to Container Registry namespace](https://cloud.ibm.com/docs/Registry?topic=Registry-getting-started#gs_registry_images_pushing)

4. Update the docker image pushed to Container Registry in `~/Agrolly-Web/deployment.yaml` file.

   ```yml
   spec:
     containers:
       - name: <enter a name for the container>
         image: <enter container registry image name/tag>
     imagePullSecrets:
       - name: all-icr-io
   ```

5. Update the Ingress subdomain value, secret name and host value that needs to be routed to cluster service in `~/Agrolly-Web/deployment.yaml` file. The Ingress subdomain value and secret name can be obtained by executing the command `ibmcloud ks cluster get --cluster <cluster_name_or_ID> | grep Ingress`.

   ```yml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
       name: agrolly-ingress-resource
       annotations:
           kubernetes.io/ingress.class: "public-iks-k8s-nginx"
   spec:
   tls:
   - hosts:
       - <Enter the Ingress subdomain value here>
       secretName: <Enter the Ingress secret value here>
   rules:
   - host: <Enter host here. Example "agrolly.com" >
   ```

6. Deploy Agrolly-Web to Kubernetes by executing command `kubectl apply -f deployment.yaml`

7. Enter the host URL in the browser to launch the Agrolly Web App.

**NOTE:** To do a rolling update any new changes repeat steps 2, 3, 4 and 6.

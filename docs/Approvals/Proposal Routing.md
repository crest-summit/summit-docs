**Approvals / Proposal Routing**

The Proposal Routing and Approval function in Summit allows for Users to submit proposals for routing.  Doing so alerts the appropriate approvers there is a proposal awaiting their review and approval.  Once the proposal is approved by all required parties, the Approved status is indicated in the proposal and it may then be submitted to the sponsor.

# Approval Navigation
The Approval Navigation is visible to all Users though only Approvers will see proposals on which they are approvers here.

Located at the bottom of the left Navigation pane, the Approval section contains three subsections: To Be Approved, Pending and Approved.  The section can be collapsed or expanded.  When the navigation pane is collapsed, only the icons for the subfolders will show.

![Approval Navigation](../images/approvals/AppPro_Navigation.jpg)

**To be Approved**

All proposals waiting on the User's Organization for approval are listed in the Summary Pane. This could mean the User is required to approve or may allow for the approval of one of several authorized Approvers or Delegates. The gavel icon indicates a decision is waiting to be made.

**Pending**

All proposals on which the User is listed an approver or delegate that have not been approved by all required Organizations are listed in the Summary.  This means all proposals that will require the User's Organization approval after another party approves and proposals which the User's Organization has already approved and are waiting on another party's approval.  It also includes all the proposals included in "To be Approved."  The question mark icon indicates approval has not been granted by all parties.

**Approved**

All proposal that have been approved by all required Organizations are listed in the Summary Pane.  The checkmark icon indicated all required approvals have been granted.

# Approval Editor
Choosing a proposal from the summary view of any of the Approval folders will display a read-only Editor that contains subset of data from the Proposal Editor.  

![Approval Editor](../images/approvals/AppPro_Editor.jpg)

**Header**

The Header includes the proposal number, the PI, the proposal label and the Sponsor name.

![Approver Editor Header](../images/approvals/AppPro_Header.jpg)

**Approval Checkbox**

When a proposal is waiting on the User's Organization in "To Be Approved" or "Pending," there will be an Approval checkbox under the header.  Once any one of Approvers or delegates for the User's Organization have approved, this option is no longer available.

![Approver Checkbox](../images/approvals/AppPro_Checkbox.jpg)

**Approval Decisions**

This section lists all of the Organizations required to approve the proposal.  If there are multiple approval chains, they are designated by a separate subsection.

![One vs Multiple Approval Chains](../images/approvals/AppPro_ApprovalDecisions.jpg)

The User's Organization will be emphasized in blue when an approval is still required.  An organization that has no parent organization will have no chain of approvers but only have itself in the list. All organizations that have approved will have the approved indicator.

![Parent Orgs](../images/approvals/AppPro_Parent.jpg)

If one organization is in multiple chains, it will be listed in each but the approver for that organization will only need to approve once.

**Work Summary**
This section is a read-only summary of the data in the Proposal Editor.  

![Work Summary](../images/approvals/AppPro_WorkSummary.jpg)

Information that is grayed out in the Budget Information section indicates the proposal budget does not include these circumstances.

**Files**
The files log is located at the top of the approval editor next to the save button.  

![Files log access](../images/approvals/AppPro_AccessFiles.jpg)

The file log lists all files attached to the proposal.  The most recent version of each file can be accessed by clicking on the file name.

![File Log Modal](../images/approvals/AppPro_FileLog.jpg)  - NEED IMAGE

# Approval Process
When a proposal is ready to routed for Departmental and College or Institute approval, any full access User can initiate the routing process.  All approvers and delegates assigned to the proposal are notified and must log in to Summit to review and approve the proposal.  Each organization on the proposal has its own approval chain, but the approvals for each chain can be done in parallel and do not need to wait on the other chains. For example, there may be two departments in two different colleges assigned to approve the proposal.  Both departments will be notified as the same time. Each college will be notified once their department has approved. The Proposal Editor tracks where the proposal is in the process and documents which approvals are pending and which are complete.

## Submit for routing
All Users with full access can submit a proposal for routing by choosing the "Submit to Routing" option on the Proposal action menu

![Submit for Routing Action](../images/approvals/AppPro_SubmitAction.jpg)

Choosing this option will activate a dialogue box where the User must confirm they want to submit the proposal for routing.  If the Proposal does not have the Activity Type field completed, the dialgue box will also require that field to be entered.

![Submit for Routing dialogue box](../images/approvals/AppPro_SubmitDialogue.jpg)

Once the proposal is in routing, the status changes to "In Routing." The chain icon indicates the proposal is in routing and has not yet been approved by all parties.  This status is captured in the Proposal Header, Summary Pane and Calendar View.

![In Routing Icons](../images/approvals/AppPro_InRoutingIcons.jpg)

## Approver Assignment
When a proposal is submitted to routing, organizations and their designated approvers and delegates are assigned to approve it.  At least one approver or delegate from each assigned organization must approve the proposal.  

**How organizations are assigned**
Organizations are assigned based upon the data in the Proposal editor. Each proposal will always have a submitting org assigned.  In addition, the following will also be assigned as applicable:
 - Responsible organization for the PI and Co-PI regardless of credit percentage.
 - Proposal Team member with credit

![Responsible Org in Routing](../images/approvals/AppPro_RespOrg.jpg)
 - Any organization providing Cost Share
 - Parent organization of any of the above.  Parent Organization is a designation in the Summit Organization Editor.  See the Management/Organization section for further information.

**How approvers are assigned**  
Specific approvers and their delegates for each organization are managed by departmental representatives in the Enterprise Directory.  The Organization Editor, available to OSP personnel, lists all approvers and delegates listed in the Enterprise Directory.

## Approver Notifications
A notification is emailed to all Approvers and delegates assigned to a proposal once it is their turn in the approval chain to approve.  For example, all departments will receive a notification that approval is required, but a college will not receive notification until the department has approved it.  If a college is in more than one approval chain, it will not receive a notification until all the departments under it have approved.

![Parent not notified until both children approve](../images/approvals/AppPro_ParentNot,jpg)

For example, if the proposal needs to be approved by both Mechanical Engineering (ME) and Aerospace and Ocean Engineering (AOE), the College of Engineering will not be notified until both ME and AOE have approved.

## Approving the Proposal
Approvers log in to Summit and see a list of proposals waiting for their approval in "Approvals / To Be Approved."  Choosing the Proposal in the Summary Pane will display a read-only view of the the basic Proposal details in the Editor. To approve the proposal, the User checks the box at the top of the Editor indicating they have reviewed and approve the proposal.

![Approval checkbox](../images/approvals/AppPro_Checkbox.jpg)

Once the User checks the box the proposal will no longer be in their "To be approved."  

Approvers listed in multiple approval chains will only receive a notification when all the chains are ready for their approval.  When they check the approval box, they will approve for each chain.  In the example below, the approver will approve for the College of Engineering in both chains when he clicks the approved checkbox:

![Approver in Multiple Chains](../images/approvals/AppPro_MultChain.jpg)

# Approvals in the Proposal
## Summary
can search by approval status



##Editor

**Header**

Proposal in Routing will display the "In Routing" chain icon and indicator in the header of the proposal.

![In Routing status in header](../images/approvals/AppPro_InRoutingHeader.jpg)

Once the proposal has been approved by all organizations, the status changes to Approved.  The header will then display the "Approved" checkmark icon and indicator.

![Approved status in header](../images/approvals/AppPro_ApprovedHeader.jpg)

**Approval Decision Section**

In the Proposal Editor, Users can track the approval process in the Approval Decision section.

![Approval Decision section of Proposal Editor](../images/approvals/AppPro_AppDecSection.jpg)

This section shows which organizations have approved and which approvals are still pending.  Notice the following in the above:
 - Organizations that have approved have a checkmark
 - The name of the approver and the time they approved appears next to the Organization name
 - The pending icon (question mark) appears to the left of any organization that 

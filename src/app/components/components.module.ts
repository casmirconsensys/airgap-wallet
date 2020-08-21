import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { TranslateModule } from '@ngx-translate/core'
import { QRCodeModule } from 'angularx-qrcode'
import { ChartsModule } from 'ng2-charts'
import { MomentModule } from 'ngx-moment'

import { PipesModule } from '../pipes/pipes.module'

import { AccountEditPopoverComponent } from './account-edit-popover/account-edit-popover.component'
import { AddressRowComponent } from './address-row/address-row'
import { AmountComponent } from './amount/amount.component'
import { CardActionableComponent } from './card-actionable/card-actionable'
import { ChartComponent } from './chart/chart.component'
import { CurrencyItemComponent } from './currency-item/currency-item'
import { CurrencySymbolComponent } from './currency-symbol/currency-symbol'
import { DelegateActionPopoverComponent } from './delegate-action-popover copy/delegate-action-popover.component'
import { DelegateEditPopoverComponent } from './delegate-edit-popover/delegate-edit-popover.component'
import { EmptyStateComponent } from './empty-state/empty-state'
import { FromToComponent } from './from-to/from-to'
import { IdenticonComponent } from './identicon/identicon'
import { PortfolioItemComponent } from './portfolio-item/portfolio-item'
import { QrClipboardComponent } from './qr-clipboard/qr-clipboard'
import { SignedTransactionComponent } from './signed-transaction/signed-transaction'
import { SwapComponent } from './swap/swap'
import { TezosDelegationCard } from './tezos-delegation-card/tezos-delegation-card'
import { TransactionItemComponent } from './transaction-item/transaction-item.component'
import { TransactionListComponent } from './transaction-list/transaction-list.component'
import { WidgetAccountExtendedDetails } from './widget-account-extended-details/widget-account-extended-details'
import { WidgetAccountSummary } from './widget-account-summary/widget-account-summary'
import { WidgetAccount } from './widget-account/widget-account'
import { WidgetAlert } from './widget-alert/widget-alert'
import { WidgetIconText } from './widget-icon-text/widget-icon-text'
import { WidgetInputText } from './widget-input-text/widget-input-text'
import { WidgetRewardList } from './widget-reward-list/widget-reward-list'
import { WidgetSelector } from './widget-selector/widget-selector'

@NgModule({
  declarations: [
    PortfolioItemComponent,
    IdenticonComponent,
    ChartComponent,
    AddressRowComponent,
    FromToComponent,
    SwapComponent,
    AccountEditPopoverComponent,
    AmountComponent,
    CardActionableComponent,
    EmptyStateComponent,
    CurrencySymbolComponent,
    QrClipboardComponent,
    SignedTransactionComponent,
    TezosDelegationCard,
    CurrencyItemComponent,
    DelegateActionPopoverComponent,
    DelegateEditPopoverComponent,

    TransactionListComponent,
    TransactionItemComponent,

    WidgetSelector,
    WidgetAccount,
    WidgetAccountSummary,
    WidgetAccountExtendedDetails,
    WidgetAlert,
    WidgetIconText,
    WidgetInputText,
    WidgetRewardList
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    PipesModule,
    MomentModule,
    ChartsModule,
    TranslateModule,
    QRCodeModule
  ],
  exports: [
    PortfolioItemComponent,
    ChartComponent,
    IdenticonComponent,
    AddressRowComponent,
    AmountComponent,
    FromToComponent,
    SwapComponent,
    AccountEditPopoverComponent,
    CardActionableComponent,
    EmptyStateComponent,
    CurrencySymbolComponent,
    QrClipboardComponent,
    SignedTransactionComponent,
    TezosDelegationCard,
    CurrencyItemComponent,
    DelegateEditPopoverComponent,

    TransactionListComponent,
    TransactionItemComponent,

    WidgetSelector,
    WidgetAccount,
    WidgetAccountSummary,
    WidgetAccountExtendedDetails,
    WidgetAlert,
    WidgetIconText,
    WidgetInputText,
    WidgetRewardList
  ],
  entryComponents: [AccountEditPopoverComponent, DelegateEditPopoverComponent]
})
export class ComponentsModule {}

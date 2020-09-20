<template>
	<view class="disc">
		<view class="disc disc-border" style="width: 525rpx;height: 525rpx;">
			<view class="disc disc-border" style="width: 500rpx;height: 500rpx;">
				<view class="disc disc-border" style="width: 475rpx;height: 475rpx;">
					<view class="disc disc-border" style="width: 450rpx;height: 450rpx;">
						<view class="disc disc-border" style="width: 425rpx;height: 425rpx;">
							<view class="disc disc-border" style="width: 400rpx;height: 400rpx;">
								<view class="disc disc-border" style="width: 375rpx;height: 375rpx;">
									<view class="disc disc-border" style="width: 350rpx;height: 350rpx;">
										<view class="disc disc-border" style="width: 325rpx;height: 325rpx;">
											<image :src=imgUrl mode="scaleToFill" class="disc-image"/>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
    props: {
        imgUrl: {
            type: String,
            default: '',
        },
       
    }
}
</script>



<style>
	.disc{
		width: 550rpx;
		height: 550rpx;
		background-color: #000;
		border-radius: 275rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.disc-border{
		border: 1rpx solid rgba(255,255,255,.2);
	}
	.disc-image{
		width: 300rpx;
		height: 300rpx;
		border-radius: 150rpx;
	}
</style>
